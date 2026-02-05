import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Target,
  Calendar,
  Pen
} from "lucide-react";

// Thông tin tiểu sử - bạn có thể chỉnh sửa ở đây
const biography = {
  introduction: `Mình là một sinh viên năm 3 đang theo học chuyên ngành Công nghệ Thông tin 
    tại Đại học Thủy Lợi (TLU). Với niềm đam mê mãnh liệt dành cho lập trình và phát triển phần mềm, 
    mình luôn không ngừng học hỏi và trau dồi kỹ năng mỗi ngày.`,
  goal: `Mục tiêu của mình là trở thành một Full-stack Developer chuyên nghiệp, 
    có cơ hội làm việc trong môi trường quốc tế, đặc biệt là tại Nhật Bản 🇯🇵`,
};

// Các thành tích & cột mốc quan trọng
const achievements = [
  {
    icon: GraduationCap,
    title: "Sinh viên CNTT",
    description: "Đại học Thủy Lợi (TLU)",
    date: "2023 - Hiện tại",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Award,
    title: "Thành tích học tập",
    description: "GPA: 3.76/4.0 - Học bổng khuyến khích học tập 5 kì, 6.5 IELTS, JLPT N3",
    date: "2023",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Briefcase,
    title: "Dự án thực tế",
    description: "5+ dự án cá nhân & nhóm về đa dạng lĩnh vực như AI, Web, Mobile",
    date: "2023 - 2025",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Award,
    title: "Hoạt động / Giải thưởng",
    description: "Vòng loạt quốc gia ICPC (2024), Lab nghiên cứu ứng dụng các hệ thống thông minh TLU (2025), Nghiên cứu khoa học sinh viên (2025)",
    date: "2024-2025",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

// Sở thích cá nhân
const interests = [
  "Lập trình",
  "Học ngoại ngữ",
  "Đọc sách",
  "Nghe nhạc",
  "Gym & Thể thao",
  "Gaming",
];

export default function Biography() {
  return (
    <section className="container mx-auto py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium rounded-full">
            <Pen className="h-3 w-3 mr-2" />
            Về mình
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tiểu sử & Thành tích
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đôi dòng về hành trình học tập và phát triển của mình
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Introduction */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  📖
                </span>
                Giới thiệu
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {biography.introduction}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-4 w-4 text-primary" />
                </span>
                Mục tiêu
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {biography.goal}
              </p>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  ✨
                </span>
                Sở thích
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="outline" 
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Achievements Timeline */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                🏆
              </span>
              Thành tích & Cột mốc
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border-2 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 w-11 h-11 flex items-center justify-center rounded-xl ${achievement.bgColor} group-hover:scale-110 transition-transform`}>
                          <Icon className={`h-5 w-5 ${achievement.color}`} />
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold">{achievement.title}</h4>
                            <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                              <Calendar className="h-3 w-3" />
                              {achievement.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
