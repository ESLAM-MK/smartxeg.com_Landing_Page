import { Component, HostListener } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgClass,CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  visible = false;

  aboutData = [
    {
      icon: 'bi-building text-primary',
      title: 'نبذة عنا',
      desc: 'نحن شركة متخصصة في أنظمة المراقبة والشبكات، نقدم حلول أمنية متكاملة باستخدام أحدث التقنيات العالمية'
    },
    {
      icon: 'bi-award text-warning',
      title: 'خبرة قوية',
      desc: 'نمتلك خبرة تتجاوز 10 سنوات في تنفيذ المشاريع الأمنية والتقنية باحترافية عالية'
    },
    {
      icon: 'bi-box-seam text-success',
      title: 'منتجات متنوعة',
      desc: 'نوفر أكثر من 1000 منتج في مجالات الكاميرات والشبكات والأنظمة الذكية وغيرها'
    },
    {
      icon: 'bi-headset text-danger',
      title: 'دعم فني 24/7',
      desc: 'فريق دعم يعمل على مدار الساعة لضمان تشغيل الأنظمة بكفاءة دون توقف'
    },
    {
      icon: 'bi-cpu text-info',
      title: 'تقنيات حديثة',
      desc:'نواكب التطور الكبير في عالم التكنولوجيا لحظة بلحظه' 
    },
    {
      icon: 'bi-trophy text-warning',
      title: 'رؤيتنا',
      desc: 'نسعى لأن نكون من الشركات الرائدة في مجال الأنظمة الأمنية في مصر'
    }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    const triggerPoint = window.innerHeight - 100;

    const section = document.querySelector('.about-section');
    if (section) {
      const top = section.getBoundingClientRect().top;
      if (top < triggerPoint) {
        this.visible = true;
      }
    }
  }

  ngOnInit() {
    this.onScroll();
  }
}

