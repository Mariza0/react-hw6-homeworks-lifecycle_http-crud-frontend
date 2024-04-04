import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FormNote } from "./FormNote";

type Item = {
    url: string;
  }

  interface Note {
    id: number,
    content: string,

}

export const Notes: React.FC<Item> = ({url}) => {
    
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [notes, setNotes] = useState<Note[]>([]);
  

    const fetchData = () => {

        fetch(url)

        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
            setData(data);
            setLoading(false);

    })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error);
    });

    if (!data && notes.length > 0) {
        setData(notes);
    }
    }

    function handleDeleteNote(id: number) {

        console.log('id',id);

        fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Успешно удалена, обновляем список заметок
            setNotes(notes.filter(note => note.id !== id));


        // После удаления заметки делаем GET запрос для получения обновленного списка
        fetchData();

        })
        .catch(error => {
            console.error('There was a problem with the delete operation:', error);
            // Обрабатываем ошибку удаления заметки
        });
    };

    useEffect(() => {
        fetchData() }
    , [url]);


    useEffect(() => {
        // Если данные в data пусты и заметки в состоянии notes не пусты, устанавливаем data в notes
        if (!data && notes.length > 0) {
            setData(notes);
        }
    }, [data, notes]);

    const handleRefresh = () => {
        setLoading(true);
        fetchData();
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  
    return (
    <div>
        <div className="class-notes-refresh">
    <h1>Notes</h1>
     <button type="button" className="button-refresh" onClick={handleRefresh}></button>
     </div>
      <div className="card-container">
        {(data || []).map((item: Note) => (
            
                <div key={uuidv4()} className="card">

                <div className="close-button_class">
                <div className="close-button" onClick={() => handleDeleteNote(item.id)}></div>
                </div>
                <div className="card-body">
                  
                    <div className="card-content">{item.content}
                        
                </div>
                </div>
                </div>
             
            ))}
      </div>
      <FormNote url={`http://localhost:7070/notes`}/>
      </div>
    );
  };
  