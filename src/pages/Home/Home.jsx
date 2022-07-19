import CardContainer from "../../components/CardContainer/CardContainer"
import HighLightCard from "../../components/HighLightCard/HighLightCard"

const data = [
    {
      id: 1,
      title: "Trip"
    },
    {
      id: 2,
      title: "Shop"
    },
    {
      id: 3,
      title: "Garage"
    },
  ]

const Home = () => {
    return (
    <CardContainer>
      {
        data.map(card => {
          return <HighLightCard key={card.id} title={card.title} />
        })
      }
    </CardContainer>
    )
}

export default Home;