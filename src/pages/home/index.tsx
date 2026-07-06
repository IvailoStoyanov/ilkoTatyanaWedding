import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import RsvpForm from "../../components/RsvpForm";
import Timetable from "../../components/Timetable";
import { GuestsProvider } from "../../contexts/GuestsContext";
import styles from './index.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <SubHeader />
            <Timetable />
            <GuestsProvider>
                <RsvpForm />
            </GuestsProvider>
        </div>
    )
}
