import { EventData, TimelineData } from "@/pages/about-me";
import styles from "@/styles/timeline.module.css";
import { useIsVisible } from "../common/useIsVisible";

interface params {
  data: TimelineData;
}

export default function Timeline({ data }: params) {
  const eventDataArray = data.events;
  const timelineContent = [];

  for (let i = 0; i < eventDataArray.length; i++) {
    timelineContent.push(<Event eventData={eventDataArray[i]} index={i} />);
    timelineContent.push(<Stick />);
  }

  timelineContent.pop();

  return (
    <div className={styles.timelineContainer}>
      <Title text="TIMELINE" />
      <div className={styles.timeline}>{...timelineContent}</div>
    </div>
  );
}

interface circleParams {
  isVisible: boolean;
}

function Circle({ isVisible }: circleParams) {
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return <div className={`${styles.circle} ${visibilityClass}`} />;
}

function Stick() {
  const [isVisible, ref] = useIsVisible();
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return <div ref={ref} className={`${styles.stick} ${visibilityClass}`} />;
}

interface eventProps {
  index: number;
  eventData: EventData;
}

function Event({ index, eventData }: eventProps) {
  const [isVisible, ref] = useIsVisible();

  return (
    <>
      <Date date={eventData.date} index={index} isVisible={isVisible} />
      <Circle isVisible={isVisible} />
      <EventCard
        title={eventData.title}
        description={eventData.description}
        index={index}
        isVisible={isVisible}
        ref={ref}
      />
    </>
  );
}

interface eventCardprops {
  index: number;
  title: string;
  description: string;
  isVisible: boolean;
  ref: any;
}

function EventCard({
  title,
  description,
  index,
  isVisible,
  ref,
}: eventCardprops) {
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return (
    <div
      ref={ref}
      className={`${styles.eventcard} ${visibilityClass}`}
      style={{ gridRowStart: 1 + 2 * index, gridRowEnd: 1 + 2 + 2 * index }}
    >
      <p className={styles.eventtitle}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

interface dateProps {
  date: string;
  index: number;
  isVisible: boolean;
  ref?: any;
}

function Date({ date, index, isVisible, ref }: dateProps) {
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return (
    <p
      ref={ref}
      className={`${styles.date} ${visibilityClass}`}
      style={{ gridRowStart: 1 + 2 * index, gridRowEnd: 1 + 2 + 2 * index }}
    >
      {date}
    </p>
  );
}

interface titleProps {
  text: string;
}

function Title({ text }: titleProps) {
  const [isVisible, ref] = useIsVisible();
  const visibilityClass = isVisible ? styles.visible : styles.invisible;

  return (
    <p ref={ref} className={`${styles.title} ${visibilityClass}`}>
      {text}
    </p>
  );
}
