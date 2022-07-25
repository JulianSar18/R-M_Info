import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import styles from "../styles/modules/Pagination.module.css";

const Pagination = () => {
  const { page, setPage, character } = useContext(CharacterContext);
  const last = character?.info?.pages;
  const onChangePage = (next) => {
    if (!character?.info?.previous && page + next <= 0) return;
    if (!character?.info?.next && page + next >= last) return;
    setPage(page + next);
  };
  const showFirstPage = () => {
    if (!character?.info?.previous && page > 1) return setPage(1);
  };
  const showSecondPage = () => {
    if (!character?.info?.previous && page < last) return setPage(last);
  };

  return (
    <div className={styles.ContainerPages}>
      <button onClick={() => showFirstPage()} disabled={page === 1}>
        1
      </button>
      <button onClick={() => onChangePage(-1)} disabled={page === 1}>
        «
      </button>
      <span>{page}</span>
      <button onClick={() => onChangePage(1)} disabled={page === last}>
        »
      </button>
      <button onClick={() => showSecondPage()} disabled={page === last}>
        {last}
      </button>
    </div>
  );
};

export default Pagination;
