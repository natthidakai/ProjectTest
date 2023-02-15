import Button from 'react-bootstrap/Button';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const TableRows = ({rowsData, deleteTableRows, handleChange}) => {
    return(
        
        rowsData.map((data, index)=>{
            const {noProduct, idProduct, nameProduct, modelProduct, SerialNo, ownerProduct, quantity, amount}= data;
            return(
                <tr key={index}>
                    <td className=''>
                        <input type="text" value={index+1} onChange={(evnt)=>(handleChange(index, evnt))} name="noProduct" className='noProduct addTableRows-input' disabled/>
                    </td>
                    <td>
                        <input type="text" value={idProduct}  onChange={(evnt)=>(handleChange(index, evnt))} name="idProduct" className='addTableRows-input'/>
                    </td>
                    <td>
                        <input type="text" value={nameProduct}  onChange={(evnt)=>(handleChange(index, evnt))} name="nameProduct" className='addTableRows-input'/>
                    </td>
                    <td>
                        <input type="text" value={modelProduct} onChange={(evnt)=>(handleChange(index, evnt))} name="modelProduct" className='addTableRows-input'/>
                    </td>
                    <td>
                        <input type="text" value={SerialNo} onChange={(evnt)=>(handleChange(index, evnt))} name="SerialNo" className='addTableRows-input'/>
                    </td>
                    <td>
                        <input type="text" value={ownerProduct} onChange={(evnt)=>(handleChange(index, evnt))} name="ownerProduct" className='addTableRows-input'/>
                    </td>
                    <td>
                        <input type="number" value={quantity} onChange={(evnt)=>(handleChange(index, evnt))} name="quantity" className='addTableRows-input'/>
                    </td>
                    <td>
                        <input type="number" value={amount} onChange={(evnt)=>(handleChange(index, evnt))} name="amount" className='addTableRows-input'/>
                    </td>
                    <td>
                        <Button variant="" className='btn-del' onClick={()=>(deleteTableRows(index))}><RiDeleteBin6Fill/></Button>
                    </td>
                </tr>
            )
        })
   
    )
    
}
export default TableRows;