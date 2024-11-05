import { useState } from 'react'
import { appContainer, board, buttons } from './App.css'
import reactLogo from './assets/react.svg'
import BoardList from './comonents/BoardList/BoardList'
import ListsContainer from './comonents/ListsContainer/ListsContainer'
import { useTypedDispatch, useTypedSelector } from './hooks/redux'
import viteLogo from '/vite.svg'

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');

  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];

  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      <BoardList activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId} />
      <div className={board}>
        <ListsContainer lists={lists} boardId ={getActiveBoard.boardId}/>
      </div>
      <div className={buttons}>
        <button >
          이 게시판 삭제하기
        </button>
        <button>
          활동 목록 보이기
        </button>
      </div>
    </div >
  )
}

export default App
