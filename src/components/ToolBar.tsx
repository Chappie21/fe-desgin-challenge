import '../styles/components/ToolBar.css'
import { GiBroadsword } from 'react-icons/gi'
import { LuSearch } from 'react-icons/lu'
import { BiSolidCoinStack } from 'react-icons/bi'
import { FaFeatherAlt } from 'react-icons/fa'
import { CustomSelect } from './CustomSelect'

export const ToolBar = () => {
    return (
        <form id='toolbar'>

            <div className="select-game">
                <GiBroadsword
                    className='input-icon'
                />
                <select>
                    <option>Select a game</option>
                    <option>Game 1</option>
                    <option>Game 1</option>
                    <option>Game 1</option>
                </select>
            </div>

            <div className='searchbar'>

                <div className='search-input'>
                    <LuSearch className='input-icon' />
                    <input
                        name='search'
                        type='text'
                        placeholder='Search'
                        readOnly
                    />
                </div>

                <div className='selects-searchbar'>
                    <div className='select-price'>
                        <CustomSelect
                            label="Price"
                            icon={<BiSolidCoinStack className='input-icon' />}
                            options={['All', 'Low to High', 'High to Low']}
                            value="All"
                        />
                    </div>

                    <div className='select-item-type'>
                        <CustomSelect
                            label="Item Type"
                            icon={<FaFeatherAlt className='input-icon' />}
                            options={['All', 'Weapons', 'Armor']}
                            value="All"
                        />
                    </div>
                 </div>

            </div>

        </form>
    )
}
