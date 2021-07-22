import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from "./InputOption"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from "./Post"
import { useState, useEffect } from "react"
import { db } from './firebase'
import firebase from "firebase"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import FlipMove from "react-flip-move"

const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot =>
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        )
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" onChange={e => setInput(e.target.value)} />
                        <button type="submit" onClick={handleClick}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e" />
                </div>
            </div>
            {/* posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
