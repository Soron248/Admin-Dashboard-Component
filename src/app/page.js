import Card from "@/Components/Card/Card";
import BigCharts from "@/Components/Charts/BigCharts";
import Charts from "@/Components/Charts/Charts";

export default function Home() {
  return (
    <main className="w-full py-10 px-5 md:px-20 lg:px-32">
      <h1 className="mb-5 md:mb-10 text-lg tex md:text-xl font-semibold">
        Welcome to Dashboard
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 lg:gap-24 mb-10 md:mb-10">
        <Charts
          name={"New Customers"}
          count={"3,897"}
          poll={"+3.3% "}
          type={"line"}
        />
        <Charts
          name={"New Orders"}
          count={"35,084"}
          poll={"+2.8%"}
          type={"area"}
        />
        <Charts name={"Growth"} count={"89.87%"} poll={"+2.8%"} type={"bar"} />
      </div>

      <div className="flex justify-center items-center gap-10 md:gap-16 flex-col md:flex-row mb-10 md:mb-10">
        <Card />
        <BigCharts />
      </div>
    </main>
  );
}
