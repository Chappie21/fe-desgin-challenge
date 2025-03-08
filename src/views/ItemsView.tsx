import '../styles/ItemsView.css'
import { ToolBar, CardContainer, ListItems } from '../components'
import { LuSettings2 } from 'react-icons/lu'
import { items } from '../mock'
import { CustomSelect } from '../components/CustomSelect'


export const ItemsView = () => {
  return (
    <div id="items-view">
      <header>
        <h1 className="title">Condimentum consectetur</h1>
        <ToolBar />
      </header>

      <section className="modal-container">
        <CardContainer>

          {/* Modal Header */}
          <article className="header-modal-container">
            <span>Showing 20 - from 125</span>

            {/* Filter sort */}
            <div className="filter-input-container">
              <div className='select-input'>
                <CustomSelect 
                  label='Sort By'
                  icon={<LuSettings2 className="input-icon input-icon-secondary" />}
                  options={['Featured', 'Game 1', 'Game 2']}
                  value='Featured'
                />
              </div>
            </div>
          </article>

          {/* Items list */}
          <article className='list'> 
            <ListItems
              items={items}
            />
          </article>


        </CardContainer>
      </section>

    </div>
  )
}
