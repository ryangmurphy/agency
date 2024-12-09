import { Card, CardContent } from "@/components/ui/card";
import NumberTicker from "@/components/magicui/number-ticker";

const stats = [
  { value: "10", symbol: "+", label: "Happy Clients" },
  { value: "15", symbol: "+ Years", label: "Collective Experience" },
  { value: "100", symbol: "%", label: "Satisfaction" },
];

export default function Achievements() {
  return (
    <section id="stats">
      <div className="container px-4 md:px-6 py-8 md:py-16 mx-auto">
        <div className="text-center space-y-4 py-4 mx-auto">
          <h2 className="text-[24px] text-primary font-mono font-medium tracking-tight">
            Our Achievements
          </h2>
          <h4 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter">
            Powering innovation in the Maritimes
          </h4>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-bold">
                    <NumberTicker
                      value={parseInt(stat.value.replace(/\D/g, ""))}
                    />{stat.symbol}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
