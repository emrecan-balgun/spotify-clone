import Section from 'components/Section';
import songs from 'data/songs'

function Home() {
  return (
    <div className="grid gap-y-8">
      <Section 
        title="Yakınlarda Çalınanlar" 
        more="/recently" 
        items={songs}
      />
      <Section 
        title="Ruh Hali" 
        more="/mood" 
        items={songs}
      />
      <Section 
        title="emron İçin Derlendi" 
        more="/madeforyou" 
        items={songs}
      />
    </div>
  )
}

export default Home