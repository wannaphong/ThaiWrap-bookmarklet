# ThaiWrap bookmarklet
ThaiWrap bookmarklet / ตัวตัดบรรทัดข้อความไทย

โปรเจคนี้ต้องการเก็บรักษา **ThaiWrap bookmarklet / ตัวตัดบรรทัดข้อความไทย** ที่พัฒนาโดย [@bact](https://github.com/bact) ไว้ โดย ThaiWrap bookmarklet ได้เผยแพร่บน [http://not.siit.net/members/art/thaiwrap.html](http://not.siit.net/members/art/thaiwrap.html) ซึ่งปัจจุบันไม่สามารถเข้าถึงได้ ดังนั้น ผมจึงทำการดึงหน้าเว็บจาก [web.archive.org](https://web.archive.org/web/20100312105822/http://not.siit.net/members/art/thaiwrap.html) มาจัดเก็บไว้

อ่านเพิ่มเติม [Auto thaiWrap()](http://bact.blogspot.com/2005/01/auto-thaiwrap.html)

**Public Domain software**

## Auto Wrap / ตัดอัตโนมัติ

If you are an author of a web page. You can force the page to be automatically wrapped, by using a thaiWrap() function at the onload event.

ในกรณีที่คุณเป็นผู้เขียนหน้าเว็บเอง สามารถบังคับให้หน้าเว็บของคุณตัดบรรทัดอัตโนมัติได้ โดยการเรียกฟังกชั่น thaiWrap() เมื่อเกิดอีเวนต์ onload
(ทำการเรียกฟังก์ชั่นทันทีเมื่อโหลดหน้าเว็บเสร็จสมบูรณ์)

1. Save this thaiwrap.js file (right click on the link) to your web folder. คัดลอกไฟล์ thaiwrap.js ลงเครื่องของคุณ (คลิกขวาบนลิงก์, เลือก Save as)
2. Add this code to your page's header (in head section)
   เพิ่มโค้ดนี้ลงที่ส่วนหัวของหน้าเว็บ (ในส่วนของ head)
```
   <script type="text/javascript" src="thaiwrap.js"></script>
```

   At the body tag, add thaiWrap() function call to the onload event.
    ที่แท็ก body ของหน้าเว็บของคุณ เพิ่มการเรียกฟังก์ชั่น thaiWrap() เข้าไปที่อีเวนต์ onload
For example / เช่น :
    
```
    <body onload="thaiWrap();">
```
