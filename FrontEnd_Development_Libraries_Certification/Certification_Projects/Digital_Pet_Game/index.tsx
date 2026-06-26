const { useState, useEffect, useCallback, useRef } = React;

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

enum PetAction {
  EAT,
  PLAY,
  SLEEP,
}

const petMoodRecord: Record<PetMood, string> = {
  [PetMood.HAPPY]: ":3",
  [PetMood.EXCITED]: "YAY",
  [PetMood.CONTENT]: ":)",
  [PetMood.SAD]: ":(",
  [PetMood.TIRED]: "D:",
  [PetMood.SICK]: ":c",
  [PetMood.HUNGRY]: ">:(",
};

const FirstView = ({
  setIsStarted,
  setPetName,
}: {
  setIsStarted: (started: boolean) => void;
  setPetName: (name: string) => void;
}) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.currentTarget;
    const inputEl = target.querySelector("#pet-name") as HTMLInputElement;

    setPetName(inputEl.value);
    setIsStarted(true);
  }

  return (
    <div id="first-view">
      <form id="pet-form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="pet-name">
          Name your pet:
        </label>
        <input id="pet-name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const SecondView = ({
  petName,
  hunger,
  energy,
  happiness,
  petVisual,
  onEat,
  onPlay,
  onSleep,
}: {
  petName: string;
  hunger: number;
  energy: number;
  happiness: number;
  petVisual: string;
  onEat: () => void;
  onPlay: () => void;
  onSleep: () => void;
}) => {
  return (
    <div id="second-view">
      <div className="pet-name">{petName}</div>
      <div className="pet-visual">{petVisual}</div>

      <button id="eat-action" onClick={onEat}>
        Eat
      </button>
      <button id="play-action" onClick={onPlay}>
        Play
      </button>
      <button id="sleep-action" onClick={onSleep}>
        Sleep
      </button>

      <div className="stat">
        Hunger
        <p className="stat-value hunger" id="hunger">
          {hunger}
        </p>
      </div>

      <div className="stat">
        Energy
        <p className="stat-value Energy" id="energy">
          {energy}
        </p>
      </div>

      <div className="stat">
        Happiness
        <p className="stat-value Happiness" id="happiness">
          {happiness}
        </p>
      </div>
    </div>
  );
};

export const PetGame = () => {
  const [hunger, setHunger] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [happiness, setHappiness] = useState(100);

  const [isStarted, setIsStarted] = useState(false);

  const [petName, setPetName] = useState("");

  useEffect(() => {
    if (!isStarted) {
      return;
    }

    const interval = setInterval(() => {
      setHunger((prev) => Math.min(prev + 5, 100));
      setEnergy((prev) => Math.min(prev + 5, 100));
      setHappiness((prev) => Math.max(prev - 5, 0));
    }, 30000);

    return () => clearInterval(interval);
  }, [isStarted]);

  const getPetMood = (): PetMood => {
    if (hunger > 70) {
      return PetMood.HUNGRY;
    }

    if (energy < 30) {
      return PetMood.TIRED;
    }

    if (happiness < 30) {
      return PetMood.SAD;
    }

    if (happiness > 80 && energy > 70) {
      return PetMood.EXCITED;
    }

    if (happiness > 60) {
      return PetMood.HAPPY;
    }

    return PetMood.CONTENT;
  };

  const handleEatButton = useCallback(() => {
    setHunger(Math.max(hunger - 10, 0));
    setEnergy(Math.min(energy + 10, 100));
  }, [hunger, energy]);

  const handlePlayButton = useCallback(() => {
    setEnergy(Math.max(energy - 10, 0));
    setHappiness(Math.min(happiness + 10, 100));
  }, [energy, happiness]);

  const handleSleepButton = useCallback(() => {
    setHunger(Math.min(hunger + 10, 100));
    setEnergy(Math.min(energy + 10, 100));
  }, [hunger, energy]);

  const currentMood = getPetMood();
  const petVisual = petMoodRecord[currentMood];

  return (
    <div>
      {isStarted ? (
        <SecondView
          petName={petName}
          hunger={hunger}
          energy={energy}
          happiness={happiness}
          petVisual={petVisual}
          onEat={handleEatButton}
          onPlay={handlePlayButton}
          onSleep={handleSleepButton}
        />
      ) : (
        <FirstView setIsStarted={setIsStarted} setPetName={setPetName} />
      )}
    </div>
  );
};
