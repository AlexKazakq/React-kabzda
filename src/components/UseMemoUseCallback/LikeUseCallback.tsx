import React, {useCallback, useMemo, useState} from "react";

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BOOKS SECRET")
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>

        </div>
    );
};

const Book = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, "Angular " + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(()=>{
        const newUsers = [...books, "Angular " + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

return (
    <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
);
}
;

