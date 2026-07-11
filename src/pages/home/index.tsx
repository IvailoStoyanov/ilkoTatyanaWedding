import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import RsvpForm from "../../components/RsvpForm";
import Timetable from "../../components/Timetable";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
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
            <Location />
            <Footer />
        </div>
    )
}
