import { IBook } from '@/model';
import { ToastContext } from '@/shared/context';
import { useFecth } from '@/shared/hooks/useFetch';
import { ENDPOINTS } from '@/utils';
import { useContext } from 'react';

export const BookList = () => {
  const { setMessages } = useContext(ToastContext);
  const { data, isLoading, error, refetch } = useFecth(
    ENDPOINTS.BOOKS,
    setMessages
  );

  if (isLoading)
    return (
      <div>
        <button
          className="bg-gray-300 m-2 p-2 rounded"
          onClick={() => refetch()}
        >
          Fetch
        </button>
        <h1>Loading data...</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <button
          className="bg-gray-300 m-2 p-2 rounded"
          onClick={() => refetch()}
        >
          Fetch
        </button>
        <h1>Error: {error}</h1>
      </div>
    );

  return (
    <div>
      <ul>
        {data?.map((book: IBook) => {
          const { title, id, author } = book;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};
