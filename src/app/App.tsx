import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TabBar } from "./components/TabBar";
import { Card } from "./components/Card";

// Mock data for cards
const cardData = [
  {
    id: 1,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 2,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 3,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 4,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 5,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 6,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 7,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 8,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 9,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  },
  {
    id: 10,
    imageUrl: "",
    date: "5 일전",
    title: "텍스트를 두 줄까지 적어주세요 두번째 줄까지 이렇게 꽉 찹니다.",
    likes: 67
  }
];

const tabs = ["Tab01", "Tab01", "Tab01", "Tab01"];

export default function App() {
  return (
    <div 
      className="min-h-screen w-full"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        fontFamily: 'var(--font-sans)'
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="w-full py-8 md:py-12">
        {/* Tab Bar */}
        <TabBar tabs={tabs} activeTab={0} />

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-7">
            {cardData.map((card) => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                date={card.date}
                title={card.title}
                likes={card.likes}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
