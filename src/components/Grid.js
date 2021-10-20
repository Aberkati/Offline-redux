// import {
// 	GridComponent,
// 	Inject,
// 	Filter,
// 	Sort,
// 	Edit,
// 	Toolbar,
// 	Page,
// 	Group,
// 	Reorder,
// 	Resize,
// 	ColumnChooser,
// 	ColumnDirective,
// 	ColumnsDirective,
// } from '@syncfusion/ej2-react-grids';

// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';

// import useWindowSize from '../hooks/useWindowSize';

// const Grid = () => {
// 	// const data = useSelector((state) => state.File.data);

// 	// const colorMode = useSelector((state) => state.Theme.color);

// 	// const [width] = useWindowSize();
// 	// const [datas, setDatas] = useState(data && JSON.parse(data));
// 	// console.log(JSON.parse(data));

// 	// const editSettings = {
// 	// 	allowEditing: true,
// 	// 	allowAdding: true,
// 	// 	allowDeleting: true,
// 	// 	mode: 'Dialog',
// 	// };

// 	// const toolbarOptions = [
// 	// 	'Add',
// 	// 	'Edit',
// 	// 	'Delete',
// 	// 	'Update',
// 	// 	'Cancel',
// 	// 	'ColumnChooser',
// 	// 	'Search',
// 	// ];

// 	// const filterOptions = { type: 'Excel' };

// 	// const load = () => {
// 	// 	// let adaptiveDlgTarget =
// 	// 	// 	document.getElementsByClassName('e-mobile-content')[0];
// 	// };

// 	// const actionComplete = (args) => {
// 	// 	if (args.requestType === 'save' || args.requestType === 'delete') {
// 	// 		// Condition executes on Grid Add/Edit/Delete success
// 	// 		// Grid export action can be performed here
// 	// 		//	console.log(grid);
// 	// 	}
// 	// };

// 	// const downloadFile = async () => {
// 	// 	const fileName = 'ExportedData';
// 	// 	const json = JSON.stringify(datas);
// 	// 	const blob = new Blob([json], { type: 'application/json' });
// 	// 	const href = await URL.createObjectURL(blob);
// 	// 	const link = document.createElement('a');
// 	// 	link.href = href;
// 	// 	link.download = fileName + '.json';
// 	// 	document.body.appendChild(link);
// 	// 	link.click();
// 	// 	document.body.removeChild(link);
// 	// };

// 	// const pageOptions = {
// 	// 	pageSize: 8,
// 	// 	pageSizes: true,
// 	// };
// 	// const GridStyled = styled(GridComponent)`
// 	// 	.e-headercell {
// 	// 		background-color: ${colorMode.split('-')[2]};
// 	// 		color: white;
// 	// 	}

// 	// 	.e-headercell .e-pager {
// 	// 		background-color: ${colorMode.split('-')[2]};
// 	// 		color: white;
// 	// 	}
// 	// 	.e-currentitem {
// 	// 		background-color: ${colorMode.split('-')[2]};
// 	// 		color: white;
// 	// 	}
// 	// 	.e-headertext {
// 	// 		font-size: 14px;
// 	// 		color: 'white';
// 	// 	}
// 	// 	th.e-headercell[aria-sort='descending'] .e-filtermenudiv {
// 	// 		color: white;
// 	// 	}

// 	// 	.e-grid .e-headercell,
// 	// 	.e-grid .e-detailheadercell {
// 	// 		background-color: cyan;
// 	// 	}
// 	// `;

// 	// const BtnWrapper = styled.div`
// 	// 	display: flex;
// 	// 	align-items: center;
// 	// 	justify-content: space-around;
// 	// `;

// 	// const BigBtn = styled.button`
// 	// 	width: 40%;
// 	// 	border: none;
// 	// 	padding: 20px;

// 	// 	color: white;
// 	// 	border-radius: 12px;
// 	// 	font-size: 16px;
// 	// 	cursor: pointer;
// 	// `;
// 	const [file, setFile] = useState(null);
// 	const handleChange = (changeEvent) => {
// 		console.log(changeEvent);
// 		const fileReader = new FileReader();
// 		fileReader.readAsText(changeEvent.target.files[0], 'UTF-8');
// 		fileReader.onload = (loadEvent) => {
// 			console.log(loadEvent);
// 			setFile(loadEvent.target.result);
// 		};
// 	};

// 	return (
// 		// <div className='e-adaptive-demo e-bigger'>
// 		// 	{data && (
// 		// 		<div className='e-mobile-layout'>
// 		// 			<div className='e-mobile-content' style={{ padding: '4px 12px' }}>
// 		// 				<GridStyled
// 		// 					className='Styled'
// 		// 					actionComplete={actionComplete}
// 		// 					ref={(grid) => grid && setDatas(grid?.dataSource)}
// 		// 					id='adaptivebrowser'
// 		// 					dataSource={datas}
// 		// 					height='100%'
// 		// 					width='100%'
// 		// 					allowFiltering={true}
// 		// 					allowSorting={true}
// 		// 					allowPaging={true}
// 		// 					allowGrouping={true}
// 		// 					allowReordering={true}
// 		// 					allowResizing={true}
// 		// 					//enablePersistence={true}
// 		// 					showColumnChooser={true}
// 		// 					filterSettings={filterOptions}
// 		// 					toolbar={toolbarOptions}
// 		// 					editSettings={editSettings}
// 		// 					load={load}
// 		// 					pageSettings={pageOptions}
// 		// 					enableAdaptiveUI={width < 1200 && true}
// 		// 					rowRenderingMode={width < 1200 && 'Vertical'}
// 		// 				>
// 		// 					<ColumnsDirective>
// 		// 						<ColumnDirective
// 		// 							field='OrderID'
// 		// 							headerText='Order ID'
// 		// 							isPrimaryKey={true}
// 		// 						></ColumnDirective>
// 		// 						<ColumnDirective
// 		// 							field='CustomerID'
// 		// 							headerText='Customer ID'
// 		// 						></ColumnDirective>
// 		// 						<ColumnDirective
// 		// 							field='ShipName'
// 		// 							headerText='ShipName'
// 		// 						></ColumnDirective>
// 		// 						<ColumnDirective
// 		// 							field='ShipAddress'
// 		// 							headerText='Ship Address'
// 		// 						></ColumnDirective>
// 		// 						<ColumnDirective
// 		// 							field='ShipCity'
// 		// 							headerText='Ship City'
// 		// 						></ColumnDirective>
// 		// 						<ColumnDirective
// 		// 							field='ShipCountry'
// 		// 							headerText='Ship Country'
// 		// 						></ColumnDirective>
// 		// 					</ColumnsDirective>
// 		// 					<Inject
// 		// 						services={[
// 		// 							Filter,
// 		// 							Sort,
// 		// 							Edit,
// 		// 							Toolbar,
// 		// 							Page,
// 		// 							Group,
// 		// 							Reorder,
// 		// 							Resize,
// 		// 							ColumnChooser,
// 		// 						]}
// 		// 					/>
// 		// 				</GridStyled>
// 		// 				<br />
// 		// 				<BtnWrapper>
// 		// 					<BigBtn
// 		// 						className='btn_json'
// 		// 						style={{
// 		// 							backgroundColor: colorMode && colorMode.split('-')[2],
// 		// 						}}
// 		// 						onClick={downloadFile}
// 		// 					>
// 		// 						Export data as json
// 		// 					</BigBtn>{' '}
// 		// 					<br />
// 		// 					<BigBtn
// 		// 						className='btn_server'
// 		// 						onClick={(e) => console.log('Async/Await with Backend')}
// 		// 						style={{
// 		// 							backgroundColor: colorMode && colorMode.split('-')[2],
// 		// 						}}
// 		// 					>
// 		// 						Sync with Server
// 		// 					</BigBtn>
// 		// 				</BtnWrapper>
// 		// 			</div>
// 		// 		</div>
// 		// 	)}
// 		// </div>
// 		<div>
// 			{!file && (
// 				<label className='custom-file-upload'>
// 					<input type='file' onChange={handleChange} />
// 					Upload JSONssssssssss
// 				</label>
// 			)}
// 			{file && (
// 				<div>
// 					<GridComponent
// 						dataSource={file}
// 						allowPaging={true}
// 						allowFiltering={true}
// 						allowGrouping={true}
// 						pageSettings={{ pageSize: 4 }}
// 					>
// 						<Inject services={[Page, Filter, Group]} />
// 					</GridComponent>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Grid;
