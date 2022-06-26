import Section from 'components/Section';

function Home() {
  const items = [
    {
      id: 1,
      title: "Ortamlarda Satılacak Bilgi",
      description: "Ortamlarda Satılacak Bilgi",
      image: "https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841"
    },
    {
      id: 2,
      title: "Ortamlarda Satılacak Bilgi",
      description: "Ortamlarda Satılacak Bilgi",
      image: "https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841"
    },
    {
      id: 3,
      title: "Ortamlarda Satılacak Bilgi",
      description: "Ortamlarda Satılacak Bilgi",
      image: "https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841"
    },
    {
      id: 4,
      title: "Ortamlarda Satılacak Bilgi",
      description: "Ortamlarda Satılacak Bilgi",
      image: "https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841"
    },
    {
      id: 5,
      title: "Ortamlarda Satılacak Bilgi",
      description: "Ortamlarda Satılacak Bilgi",
      image: "https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841"
    },
  ]
  return (
    <div>
      <Section 
        title="Recently played" 
        more="/blabla" 
        items={items}
      />
    </div>
  )
}

export default Home