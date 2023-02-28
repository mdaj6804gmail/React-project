import Answers from '../../component/Answers';
import MiniPlayer from '../../component/MiniPlayer';
import Progressbar from '../../component/Progressbar';



export default function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <Progressbar />
            <MiniPlayer />

        </>
    );
}