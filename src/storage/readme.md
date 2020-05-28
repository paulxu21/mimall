# Storage 封装
## Cookie、Storage、sessionStorage区别
- 存储大小：Cookie 4k、 Storage 5M
- 有效期：Cookie拥有有效期、 Storage永久存储
- Cookie会发送到服务器端，存储在内存中、 Storage只存储在浏览器端
   - LocalStorage永久存储、sessionStorage存在内存中
- 路径：Cookie有路径限制、Storage只存储在域名下
- API：Cookie没有特定的API、Storage有对应的API
## 为什么封装Storage
- Storage本身有API，但只是简单的k-v形式
- Storage只存储字符串，需要手工转换json对象
- Storage只能一次性清空，不能单个清空
