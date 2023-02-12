    import {React,useEffect,useState} from 'react';
    import {db,auth} from '../config/firebase-config';
    import{getDocs,collection,addDoc}from 'firebase/firestore'


    const Home = () => {
        const [articleList, setArticle] = useState([]);
        const [newArticleTitle, setNewArticleTitle] = useState("");
        const [newReleaseDate, setNewReleaseDate] = useState(0);
        const [isNewArticleOscar, setIsNewArticleOscar] = useState(false);
        const articlesCollectionRef = collection(db, "articles");

        useEffect(()=>{
        const getArticleList = async () => {
            try{
            const data = await getDocs(articlesCollectionRef);
            const dataset = data.docs.map( (doc)=>({
                ...doc.data(),
                id: doc.id
            } ));
            // console.log({dataset});
            setArticle(dataset);

        
            } catch (err){console.error("1"+err);}
            
        };

        
        useEffect(async() => {
            getArticleList();
          }, []);
        
        const onSubmitArticle = async () => {
            try {
            await addDoc(articlesCollectionRef, {
                title: newArticleTitle,
                releaseDate: newReleaseDate,
                ratedBest: isNewArticleOscar,
                userId: auth?.currentUser?.uid,
            });
            getArticleList();
            } catch (err) {
            console.error("2"+err);
            }
        };
        
    return (
        <div>
        <h1>here you find the articles </h1>
        <form >
        <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            value={newArticleTitle}
            onChange={event => setNewArticleTitle(event.target.value)}
            />
        </div>
        <div>
            <label htmlFor="releasedate">release date:</label>
            <textarea
            id="releasedate"
            value={newReleaseDate}
            type="number    "
            onChange={event => setNewReleaseDate(Number(event.target.value))}
            />
        </div>
        <div>
            <label htmlFor="best">is best :</label>
            <textarea
            
            id="best"
            //   value={best}
            type="checkbox"
            checked={isNewArticleOscar}
            onChange={event => setIsNewArticleOscar(event.target.checked)}
            />
        </div>
        <button  onClick={onSubmitArticle} type="submit">Add Element</button>
        </form>
    );
        {articleList.map((article)=>(
            <div>
                <h2 style={{color: article.ratedbest ? "red":"green"}}>{article.title}</h2>
        
                <p>Date:{article.releaseDate}</p>
            </div>
        ))}

        </div>
     );
    })

}
    export default Home;
