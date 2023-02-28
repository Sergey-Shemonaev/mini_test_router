import styled from "styled-components";

export default function Attractions() {
  const arr = [
    {
      id: 1,
      title: "Музей Русский самовар",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ba/34/e0/caption.jpg?w=1200&h=-1&s=1"
    },
    {
      id: 2,
      title: "Музей Колоколов",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/52/d3/5e/caption.jpg?w=1200&h=-1&s=1"
    },
    {
      id: 3,
      title: "Касимовскии Краеведческий Музей",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/33/b3/c0/caption.jpg?w=1200&h=-1&s=1"
    },
    {
      id: 4,
      title: "Собор Вознесения Господня",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/45/72/a9/caption.jpg?w=900&h=-1&s=1"
    },
    {
      id: 5,
      title: "Собор Вознесения Господня",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ce/3f/c6/caption.jpg?w=1200&h=-1&s=1"
    },
    {
      id: 6,
      title: "Церковь Богоявления Господня",

      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5a/ac/e9/caption.jpg?w=1000&h=-1&s=1"
    }
  ];

  return (
    <div>
      <h2 className="text-warning">Достопримечательности в Касимове</h2>
      {/* <Attraction>
        <p>
          <img
            style={{ width: "20em", height: "20em" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ba/34/e0/caption.jpg?w=1200&h=-1&s=1"
          />
          <p>Музей Русский самовар</p>
        </p>
        <p>
          <img
            style={{ width: "20em", height: "20em" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/52/d3/5e/caption.jpg?w=1200&h=-1&s=1"
          />
          <p>Музей Колоколов</p>
        </p>
        <p>
          <img
            style={{ width: "20em", height: "20em" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/33/b3/c0/caption.jpg?w=1200&h=-1&s=1"
          />
          <p>Касимовскии Краеведческий Музей</p>
        </p>
        <p>
          <img
            style={{ width: "20em", height: "20em" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/45/72/a9/caption.jpg?w=900&h=-1&s=1"
          />
          <p>Собор Вознесения Господня</p>
        </p>
        <p>
          <img
            style={{ width: "20em", height: "20em" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ce/3f/c6/caption.jpg?w=1200&h=-1&s=1"
          />
          <p>Собор Вознесения Господня</p>
        </p>
        <p>
          <img
            style={{ width: "20em", height: "20em" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5a/ac/e9/caption.jpg?w=1000&h=-1&s=1"
          />
          <p>Церковь Богоявления Господня</p>
        </p>
      </Attraction> */}

      <AttractionStyle>
        {arr.map((el) => (
          <p key={el?.id}>
            <img
              key={el.id}
              src={el.image}
              style={{ width: "25em", height: "25em" }}
            />
            <p>{el.title}</p>
          </p>
        ))}
      </AttractionStyle>
    </div>
  );
}

const AttractionStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  /* width: 1000px; */
`;
