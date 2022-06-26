import Section from 'components/Section';

function Home() {
  const items = [
    {
      id: 1,
      title: "Ortamlarda Satılacak Bilgi",
      description: "Ortamlarda Satılacak Bilgi",
      type: "podcast",
      image: "https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841"
    },
    {
      id: 2,
      title: "Cigarattes After Sex",
      description: "Sanatçı",
      type: "artist",
      image: "https://i.scdn.co/image/ab6761610000f178184c693111b41bc7f101ce8a"
    },
    {
      id: 3,
      title: "Sadece sen",
      description: "- emron",
      type: "album",
      image: "https://i.scdn.co/image/ab67706c0000da849b54c125c40d392c8d908ebd"
    },
    {
      id: 4,
      title: "Car Music",
      description: "- emron",
      type: "album",
      image: "https://i.scdn.co/image/ab67706c0000da84f1b1fd1dab439e7595a964d0"
    },
    {
      id: 5,
      title: "Mixtape",
      description: "- emron",
      type: "album",
      image: "https://i.scdn.co/image/ab67706c0000da84bf3b9f8f013192197ed7e482"
    },
  ]
  return (
    <div className="grid gap-y-8">
      <Section 
        title="Yakınlarda Çalınanlar" 
        more="/recently" 
        items={items}
      />
      <Section 
        title="Ruh Hali" 
        more="/mood" 
        items={items}
      />
      <Section 
        title="emron İçin Derlendi" 
        more="/madeforyou" 
        items={items}
      />
    </div>
  )
}

export default Home