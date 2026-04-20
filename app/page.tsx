"use client";
import React, { useState } from 'react';
import { Clock, Calendar, Flag, ChevronRight, GraduationCap, Users, MapPin, Swords, Star, Target } from 'lucide-react';

// Định nghĩa kiểu dữ liệu (TypeScript Interfaces)
interface Detail {
  heading: string;
  content: string;
}

interface Tip {
  title: string;
  content: React.ReactNode;
}

interface ReviewItem {
  id: string;
  title: string;
  time: string;
  icon: React.ReactNode;
  summary: string;
  details: Detail[];
  tip?: Tip;
}

// Dữ liệu ôn tập: CÁC YẾU TỐ TẠO NÊN THỜI CƠ (Theo Giáo trình VNR202)
const reviewData: ReviewItem[] = [
  {
    id: 'dien-tap-1',
    title: 'Cuộc diễn tập lần thứ nhất (1930 - 1931)',
    time: '1930 - 1931',
    icon: <Flag className="w-7 h-7 text-red-600" />,
    summary: 'Cao trào cách mạng 1930-1931 và Xô viết Nghệ Tĩnh: Bước chuẩn bị đầu tiên về lực lượng.',
    details: [
      {
        heading: 'Khẳng định quyền lãnh đạo',
        content: 'Cao trào 1930-1931 chứng minh đường lối cách mạng đúng đắn của Đảng ngay từ khi mới ra đời, giành được quyền lãnh đạo duy nhất đối với phong trào cách mạng Việt Nam.'
      },
      {
        heading: 'Xây dựng khối liên minh Công - Nông',
        content: 'Lần đầu tiên trong lịch sử, khối liên minh công nông được hình thành vững chắc trong thực tiễn đấu tranh. Quần chúng bước đầu được thức tỉnh và rèn luyện.'
      },
      {
        heading: 'Trải nghiệm bạo lực cách mạng',
        content: 'Đây là cuộc tập dượt đầu tiên của quần chúng dưới sự lãnh đạo của Đảng về việc sử dụng bạo lực cách mạng để đập tan bộ máy chính quyền của địch.'
      },
      {
        heading: 'Để lại bài học kinh nghiệm',
        content: 'Để lại những bài học quý báu về công tác xây dựng Đảng, xây dựng khối liên minh công nông, về phương pháp giành và giữ chính quyền.'
      }
    ],
    tip: {
      title: 'Yếu tố chủ quan',
      content: 'Cách mạng không thể bùng nổ và thắng lợi nếu không có hạt nhân lãnh đạo. Việc Đảng ra đời và rèn luyện quần chúng qua Xô viết Nghệ Tĩnh chính là bước gieo hạt đầu tiên để tạo thế cho thời cơ 15 năm sau.'
    }
  },
  {
    id: 'dien-tap-2',
    title: 'Cuộc diễn tập lần thứ hai (1936 - 1939)',
    time: '1936 - 1939',
    icon: <Users className="w-7 h-7 text-blue-500" />,
    summary: 'Phong trào Dân chủ 1936-1939: Xây dựng đội quân chính trị quần chúng hùng hậu.',
    details: [
      {
        heading: 'Chuyển hướng phương pháp đấu tranh',
        content: 'Đảng đã linh hoạt chuyển từ đấu tranh bí mật, bất hợp pháp sang kết hợp đấu tranh công khai, bán công khai, hợp pháp và nửa hợp pháp phù hợp với hoàn cảnh mới.'
      },
      {
        heading: 'Xây dựng đội quân chính trị khổng lồ',
        content: 'Thông qua các phong trào đấu tranh sôi nổi, Đảng đã giác ngộ và tổ chức được một đạo quân chính trị hùng hậu gồm hàng triệu người, từ thành thị đến nông thôn.'
      },
      {
        heading: 'Mở rộng uy tín của Đảng',
        content: 'Qua cuộc diễn tập này, uy tín và ảnh hưởng của Đảng được mở rộng và củng cố sâu sắc trong các tầng lớp nhân dân, củng cố niềm tin vững chắc vào sự lãnh đạo của Đảng.'
      }
    ],
    tip: {
      title: 'Tích lũy lực lượng',
      content: 'Thời cơ có đến mà không có lực lượng thì cũng vô nghĩa. Hàng triệu quần chúng được rèn luyện trong giai đoạn này chính là lực lượng then chốt để làm nên "sức mạnh dời non lấp biển" vào tháng 8/1945.'
    }
  },
  {
    id: 'chuan-bi-truc-tiep',
    title: 'Bước chuẩn bị trực tiếp (1939 - 1945)',
    time: '1939 - Đầu 1945',
    icon: <MapPin className="w-7 h-7 text-green-500" />,
    summary: 'Thành lập Việt Minh, xây dựng lực lượng vũ trang và căn cứ địa cách mạng.',
    details: [
      {
        heading: 'Chuyển hướng chỉ đạo chiến lược',
        content: 'Hội nghị Trung ương 6, 7 và đặc biệt là Hội nghị 8 (5/1941) đã quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất để tập trung chống đế quốc.'
      },
      {
        heading: 'Thành lập Mặt trận Việt Minh',
        content: 'Nhằm thực hiện chính sách đại đoàn kết, thu hút mọi tầng lớp, giai cấp, tôn giáo, đảng phái yêu nước để tập trung sức mạnh cho mục tiêu giành độc lập dân tộc.'
      },
      {
        heading: 'Xây dựng lực lượng vũ trang',
        content: 'Đảng chú trọng phát triển lực lượng vũ trang, từ các đội du kích nhỏ lẻ tiến tới thành lập Cứu quốc quân và Đội Việt Nam Tuyên truyền Giải phóng quân (12/1944).'
      },
      {
        heading: 'Xây dựng căn cứ địa cách mạng',
        content: 'Xây dựng và mở rộng các căn cứ địa (Bắc Sơn - Võ Nhai, Cao Bằng). Đến 6/1945, Khu giải phóng Việt Bắc được thành lập, trở thành hình ảnh thu nhỏ của nước Việt Nam mới.'
      }
    ],
    tip: {
      title: 'Sẵn sàng hành động',
      content: <>Sự chuẩn bị toàn diện về <strong className="text-red-700">Chính trị - Vũ trang - Căn cứ địa</strong> là yếu tố chủ quan mang tính quyết định. Nó chứng minh Đảng ta không ngồi chờ thời cơ rơi xuống, mà chủ động tạo ra thế trận để đón thời cơ.</>
    }
  },
  {
    id: 'tao-the-thoi-co',
    title: 'Tạo thế đón thời cơ (Tháng 3 - 8/1945)',
    time: '9/3 - Giữa tháng 8/1945',
    icon: <Swords className="w-7 h-7 text-orange-500" />,
    summary: 'Nhật đảo chính Pháp, Đảng phát động Cao trào kháng Nhật cứu nước.',
    details: [
      {
        heading: 'Kẻ thù tự loại trừ nhau',
        content: 'Ngày 9/3/1945, phát xít Nhật làm cuộc đảo chính lật đổ Pháp. Thực dân Pháp hèn nhát đầu hàng. Kẻ thù trực tiếp của cách mạng Việt Nam lúc này chỉ còn lại phát xít Nhật.'
      },
      {
        heading: 'Chỉ thị lịch sử 12/3/1945',
        content: 'Ban Thường vụ Trung ương Đảng ra Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta", kịp thời thay đổi khẩu hiệu và phát động cao trào kháng Nhật cứu nước.'
      },
      {
        heading: 'Khởi nghĩa từng phần',
        content: 'Đảng chỉ đạo tiến hành chiến tranh du kích cục bộ và khởi nghĩa từng phần ở nhiều địa phương, làm cho bộ máy thống trị của địch rạn nứt và suy yếu từ cơ sở.'
      },
      {
        heading: 'Cao trào "Phá kho thóc, giải quyết nạn đói"',
        content: 'Khẩu hiệu này đáp ứng đúng nguyện vọng cấp bách của nhân dân, đã thổi bùng ngọn lửa căm thù, lôi kéo hàng triệu nông dân sẵn sàng bước vào trận tuyến cách mạng.'
      }
    ],
    tip: {
      title: 'Thúc đẩy thời cơ chín muồi',
      content: 'Chỉ thị 12/3 là một kiệt tác về nhận định tình hình. Khởi nghĩa từng phần và các cao trào quần chúng làm cho hệ thống cai trị của địch rạn nứt từ dưới lên trên, tạo tiền đề trực tiếp để Tổng khởi nghĩa bùng nổ.'
    }
  },
  {
    id: 'thien-thoi-xuat-hien',
    title: 'Thời cơ vàng xuất hiện (Giữa tháng 8/1945)',
    time: '15/8/1945',
    icon: <Clock className="w-7 h-7 text-red-600" />,
    summary: 'Yếu tố khách quan (Thiên thời) hội tụ hoàn hảo cùng sức mạnh chủ quan.',
    details: [
      {
        heading: 'Kẻ thù trực tiếp gục ngã',
        content: 'Ngày 15/8/1945, phát xít Nhật chính thức tuyên bố đầu hàng Đồng minh không điều kiện. Quân đội Nhật ở Đông Dương tê liệt, hoang mang cực độ.'
      },
      {
        heading: 'Chính quyền tay sai rệu rã',
        content: 'Mất đi chỗ dựa là phát xít Nhật, chính phủ bù nhìn Trần Trọng Kim hoang mang, rệu rã và gần như tê liệt hoàn toàn.'
      },
      {
        heading: 'Khoảng trống quyền lực xuất hiện',
        content: 'Đây là tình thế "ngàn năm có một": Kẻ thù cũ (Pháp) chưa kịp quay lại, kẻ thù mới (Nhật) đã gục ngã, và lực lượng Đồng minh chưa kịp vào Đông Dương để giải giáp.'
      },
      {
        heading: 'Quần chúng đã sẵn sàng',
        content: 'Lực lượng cách mạng do Đảng lãnh đạo đã chuẩn bị sẵn sàng, quần chúng nhân dân đã sục sôi, quyết tâm vùng lên giành độc lập, không sợ hy sinh.'
      },
      {
        heading: 'Đảng chớp thời cơ phát lệnh',
        content: 'Nhận thấy thời cơ vàng đã đến, Hội nghị toàn quốc và Quốc dân Đại hội Tân Trào lập tức phát lệnh Tổng khởi nghĩa. Sức mạnh toàn dân được bung ra như vũ bão, giành chính quyền thần tốc.'
      }
    ],
    tip: {
      title: 'Hội tụ Thiên thời - Địa lợi - Nhân hòa',
      content: <>Thời cơ Cách mạng Tháng Tám không phải là sự may mắn từ trên trời rơi xuống, mà là sự kết hợp hoàn hảo giữa <strong className="text-red-700">điều kiện khách quan thuận lợi</strong> và <strong className="text-red-700">sự chuẩn bị chủ quan bền bỉ suốt 15 năm</strong> của Đảng và dân tộc.</>
    }
  }
];

export default function App() {
  const [activeItem, setActiveItem] = useState<ReviewItem>(reviewData[0]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-gray-100 to-slate-200 font-sans pb-12">
      
      {/* Khai báo keyframes CSS trực tiếp để tạo animation mượt mà */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-content {
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Header Premium - Đã xóa max-w-6xl để header trải full màn hình, bám sát lề trái */}
      <header className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white shadow-xl sticky top-0 z-20 border-b-4 border-yellow-400">
        <div className="w-full px-4 py-5 sm:px-8 lg:px-10 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400/20 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/30">
              <Target className="w-7 h-7 text-yellow-300" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md">
                Các yếu tố tạo nên Thời cơ Cách mạng
              </h1>
              <p className="text-red-200 text-xs sm:text-sm font-medium mt-0.5">
                Quá trình chuẩn bị 15 năm (1930 - 1945)
              </p>
            </div>
          </div>
          {/* <div className="hidden sm:flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full border border-red-500/30 backdrop-blur-sm">
            <GraduationCap className="w-5 h-5 text-yellow-200" />
            <span className="text-red-100 text-sm font-medium">Tài liệu: Giáo trình VNR202</span>
          </div> */}
        </div>
      </header>

      {/* Main Content - Căn giữa để dễ đọc (max-w-6xl mx-auto) */}
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Phần Title Content được căn lề trái (text-left) thống nhất trên mọi thiết bị */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Quá trình &quot;Tạo thế&quot; & &quot;Đón thời cơ&quot;</h2>
          <p className="mt-2 text-lg text-gray-600">Phân tích sự kết hợp giữa sự chuẩn bị chủ quan (15 năm) và hoàn cảnh khách quan lịch sử.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Timeline Sidebar (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col relative">
             {/* Vertical Line for Timeline with Gradient */}
            <div className="absolute left-[39px] top-6 bottom-6 w-1 bg-gradient-to-b from-red-500 via-red-300 to-transparent rounded-full hidden lg:block z-0 opacity-40"></div>

            <div className="flex flex-col gap-5 relative z-10">
              {reviewData.map((item) => {
                const isActive = activeItem.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={`group flex items-start text-left p-5 rounded-2xl transition-all duration-300 ease-out border-2 ${
                      isActive
                        ? 'bg-white border-red-500 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transform scale-[1.02] ring-4 ring-red-500/10'
                        : 'bg-slate-500/5 border-transparent hover:bg-white hover:border-red-200 hover:shadow-lg'
                    }`}
                  >
                    <div className={`p-2.5 rounded-2xl mr-4 shrink-0 transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-red-50 ring-1 ring-red-200 shadow-inner scale-110' 
                        : 'bg-white group-hover:bg-red-50 group-hover:scale-105'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`font-bold text-sm uppercase tracking-wider ${isActive ? 'text-red-700' : 'text-gray-500 group-hover:text-red-500'}`}>
                          {item.time}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-red-500 translate-x-1' : 'text-gray-300 group-hover:text-red-300'}`} />
                      </div>
                      <h4 className={`mt-1.5 font-bold text-base ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Panel (Right) */}
          <div className="w-full lg:w-2/3">
            {/* Sử dụng key={activeItem.id} để React mount lại component mỗi khi đổi tab */}
            <div key={activeItem.id} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-full animate-content">
              
              {/* Panel Header */}
              <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 px-8 py-10 text-white relative overflow-hidden group">
                {/* Decorative Background Icon */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 transform translate-x-8 scale-[3] transition-transform duration-1000 group-hover:scale-[3.2] group-hover:-rotate-6 pointer-events-none">
                   {activeItem.icon}
                </div>
                
                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <div className="bg-yellow-400/20 p-1.5 rounded-md backdrop-blur-md border border-yellow-400/30">
                    <Calendar className="w-5 h-5 text-yellow-300" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-yellow-200 uppercase drop-shadow-sm">
                    {activeItem.time}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight drop-shadow-md">
                    {activeItem.title}
                  </h2>
                  <p className="text-red-100 text-lg font-medium leading-relaxed max-w-2xl opacity-90">
                    {activeItem.summary}
                  </p>
                </div>
              </div>

              {/* Panel Body */}
              <div className="p-8 sm:p-10 bg-white">
                <div className="space-y-10">
                  {activeItem.details.map((detail, index) => (
                    <div key={index} className="relative pl-8 border-l-[3px] border-red-100 hover:border-red-400 transition-colors duration-300">
                      <div className="absolute w-5 h-5 bg-gradient-to-br from-red-400 to-red-600 rounded-full -left-[11px] top-1 border-4 border-white shadow-md"></div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        {detail.heading}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {detail.content}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Visual Flair / Tip box at bottom */}
                {activeItem.tip && (
                  <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/60 rounded-2xl p-6 flex items-start gap-5 shadow-sm">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-yellow-100 shrink-0">
                      <Star className="w-6 h-6 text-yellow-600 fill-yellow-600/20" />
                    </div>
                    <div>
                      <h5 className="font-bold text-yellow-900 text-base uppercase tracking-wide">{activeItem.tip.title}</h5>
                      <p className="text-yellow-800 text-base mt-2 leading-relaxed opacity-90">
                        {activeItem.tip.content}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}