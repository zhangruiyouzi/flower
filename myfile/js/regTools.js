
//封装正则
//参数：
// 正则类型（要判断的内容类型，如：电子邮箱，手机号码等等）
// 字符串
//返回值：true：符合，false：不符合 

// check(str,"email");

function check(str,type) {
	switch(type){
		case "name":var r = /^[A-Za-z][A-Za-z0-9]{5,15}$/; break;
		case "pass":var r = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/; break;   //长度为6-16个字母、数字组合，不能为纯数字 
		case "email":var r =  /^[1-9a-zA-Z_]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/; break;
		case "phone":var r =  /^1[3-9]\d{9}$/; break;
		case "chineseName":var r =  /^[\u4E00-\u9FA5]{2,4}$/; break;   
		case "cardId":var r =  /^\d{17}(\d|X)$/; break;   
	}

	return r.test(str);

} 
 // case "password": var r=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/;break;