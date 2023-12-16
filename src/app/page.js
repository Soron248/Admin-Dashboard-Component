import Charts from "@/Components/Charts/Charts";

export default function Home() {
  return (
    <main className="w-full p-10">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-24">
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
    </main>
  );
}
