import '../styles/ItemsView.css'
import { ToolBar, CardContainer } from '../components'
import { LuSettings2 } from 'react-icons/lu'


export const ItemsView = () => {
  return (
    <div className="main-container">

      <header>
        <h1 className="title">Condimentum consectetur</h1>
        <ToolBar />
      </header>

      <section className="modal-container">
        <CardContainer>

          {/* Modal Header */}
          <div className="header-modal-container">
            <p>Show 20 - from 125</p>

            {/* Filter sort */}
            <div className="filter-input-container">
              <LuSettings2 className="input-icon-secondary" />
              <div className='select-input'>
                <label>Sort By</label>
                <select>
                  <option>Featured</option>
                  <option>Game 1</option>
                  <option>Game 1</option>
                </select>
              </div>
            </div>
          </div>



        </CardContainer>
      </section>

    </div>
  )
}
