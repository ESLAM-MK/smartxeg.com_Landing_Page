import { Component } from '@angular/core';
import ServicesI from "../../utils/serviceInterfae"
@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services {
   services:ServicesI[]=[
    {
      img:"hd camera.webp",
      title:"Security camera (CCTV HD)-كاميرات مراقبه اتش دي",
      link:"https://smartxeg.com/product-category/cctv-cam/cctv-hd-camera/"
    },
   {      img:"ip camera.webp",

      title:"Security camera (CCTV ip) - كاميرات مراقبه اي بي",
      link:"https://smartxeg.com/product-category/cctv-cam/cctv-ip-camera/"
    },
    {
           img:"wir.webp",

      title:"Security camera (Wireless) - كاميرات مراقبه لاسلكيه",
      link:"https://smartxeg.com/product-category/cctv-cam/wifi-cameras-wireless/"
    },{
      img:"DVR.webp",
      title:"DVR and NVR - اجهزة تشغيل الكاميرات",
      link:"https://smartxeg.com/product-category/cctv-cam/dvr-nvr/"
    },
    {      img:"satakite.webp",

      title:" Satellite Dish and it's accessories -اطباق الدش و مستلزماتها",
      link:"https://smartxeg.com/product-category/reciver-and-satellite/%d8%a7%d8%b7%d8%a8%d8%a7%d9%82-%d8%a7%d9%84%d8%af%d8%b4-%d9%88-%d9%85%d8%b3%d8%aa%d9%84%d8%b2%d9%85%d8%a7%d8%aa%d9%87%d8%a7/"
    },
    {      img:"receiver.webp",

      title:"Recivers - ريسيفرات",
      link:"https://smartxeg.com/product-category/reciver-and-satellite/reciver/"
    },
    {      img:"wall mount.webp",

      title:"Wall mounts - حوامل الشاشات",
      link:"https://smartxeg.com/product-category/reciver-and-satellite/%d8%ad%d9%88%d8%a7%d9%85%d9%84-%d8%b4%d8%a7%d8%b4%d8%a7%d8%aa/"
    },
    {      img:"Alcatel.webp",

      title:" Centrals and landline telephones - سنترالات و تليفون ارضى",
      link:"https://smartxeg.com/product-category/security-system/%d8%b3%d9%86%d8%aa%d8%b1%d8%a7%d9%84%d8%a7%d8%aa-%d9%88-%d8%aa%d9%84%d9%8a%d9%81%d9%88%d9%86-%d8%a7%d8%b1%d8%b6%d9%89-centrals-and-landline-telephones/"
    },
    {      img:"intercom.webp",

      title:"Intercom - انتركم صوتي ومرئي",
      link:"https://smartxeg.com/product-category/security-system/intercom/"
    },
    {      img:"smart lock.webp",

      title:"Smart lock - كالون سمارت",
      link:"https://smartxeg.com/product-category/security-system/smartlock/"
    },
    {      img:"ups.webp",

      title:"UPS - أجهزة مانع اتقطاع الكهرباء",
      link:"https://smartxeg.com/product-category/security-system/%d8%a3%d8%ac%d9%87%d8%b2%d8%a9-%d9%85%d8%a7%d9%86%d8%b9-%d8%a7%d8%aa%d9%82%d8%b7%d8%a7%d8%b9-%d8%a7%d9%84%d9%83%d9%87%d8%b1%d8%a8%d8%a7%d8%a1-ups/"
    },
    {      img:"sound.webp",

      title:"Sound system - انظمة الصوتيات",
      link:"https://smartxeg.com/product-category/security-system/sound-systems/",
    },{      img:"attendence.webp",

       title:"Time and attendance devices - اجهزة الحضور والانصراف بالبصمه",
      link:"https://smartxeg.com/product-category/security-system/time-attendance/",
    },{      img:"network cables.webp",

      title:"Network cables - كابلات الانترنت",
      link:"https://smartxeg.com/product-category/network/network-cable/"
    },{      img:"router.webp",

      title:"Routers and access point - راوتر واكسيس بوينت",
      link:"https://smartxeg.com/product-category/network/router-access-point/"
    },{      img:"rack.webp",

      title:"Racks - راكات",
      link:"https://smartxeg.com/product-category/network/racks/"
    }
    
  ]
}
