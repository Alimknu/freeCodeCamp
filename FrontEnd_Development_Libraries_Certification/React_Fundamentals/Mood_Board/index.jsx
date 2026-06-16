export function MoodBoardItem({ color, image, description }) {
  const styles = {
    backgroundColor: color,
  };

  return (
    <div className="mood-board-item" style={styles}>
      <img src={image} className="mood-board-image" alt=""/>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const moodBoardItems = [
    {
      id: 1,
      color: "gray",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "basic description",
    },
    {
      id: 2,
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "basic description",
    },
    {
      id: 3,
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "basic description",
    },
  ];
  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      {moodBoardItems.map((item) => (
        <MoodBoardItem
          key={item.id}
          color={item.color}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
}
