import { useEffect, useState } from 'react';
import {
	GridComponent,
	Inject,
	Filter,
	Sort,
	Edit,
	Toolbar,
	Page,
	Group,
	Reorder,
	Resize,
	ColumnChooser,
	ColumnDirective,
	ColumnsDirective,
} from '@syncfusion/ej2-react-grids';
import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Upload = () => {
	const [file, setFile] = useState('');
	const [width] = useWindowSize();
	const colorMode = useSelector((state) => state.Theme.color);

	useEffect(() => {
		let content = localStorage.getItem('JSON');
		content && setFile(JSON.parse(content));
		// message.success("Nous avons sauvegardé votre travail");
	}, []);

	const handleChange = (changeEvent) => {
		const fileReader = new FileReader();
		if (changeEvent.target.files[0]) {
			fileReader.readAsText(changeEvent.target.files[0], 'UTF-8');
			fileReader.onload = (loadEvent) => {
				console.log(typeof JSON.parse(loadEvent.target.result));
				let str = JSON.stringify(loadEvent.target.result);
				if (str.charAt(1) === '[') {
					setFile(JSON.parse(loadEvent.target.result));
				} else {
				}
			};
		} else {
		}
	};

	const filterOptions = { type: 'Excel' };
	const actionComplete = (args) => {
		if (args.requestType === 'save' || args.requestType === 'delete') {
			// Condition executes on Grid Add/Edit/Delete success
			// Grid export action can be performed here
			//	console.log(grid);
		}
	};

	const toolbarOptions = [
		'Add',
		'Edit',
		'Delete',
		'Update',
		'Cancel',
		'ColumnChooser',
		'Search',
	];

	const editSettings = {
		allowEditing: true,
		allowAdding: true,
		allowDeleting: true,
		mode: 'Dialog',
	};

	const load = () => {
		// let adaptiveDlgTarget =
		// 	document.getElementsByClassName('e-mobile-content')[0];
	};

	const pageOptions = {
		pageSize: 8,
		pageSizes: true,
	};

	const downloadFile = async () => {
		const fileName = 'ExportedData';
		const json = JSON.stringify(file);
		const blob = new Blob([json], { type: 'application/json' });
		const href = await URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = href;
		link.download = fileName + '.json';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		localStorage.setItem('JSON', json);
	};

	const GridStyled = styled(GridComponent)`
		.e-headercell {
			background-color: ${colorMode.split('-')[2]};
			color: white;
		}
	`;
	const BtnWrapper = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-around;
	`;

	const BigBtn = styled.button`
		width: 40%;
		border: none;
		padding: 20px;

		color: white;
		border-radius: 12px;
		font-size: 16px;
		cursor: pointer;
	`;
	return (
		<>
			{!navigator.onLine && (
				<div
				// message="Vous n'êtes pas connecté à Internet"
				// description='Pas de panique, vous pouvez travailler comme si vous étiez en ligne :)'
				// type='warning'
				// closable
				// onClose={onClose}
				// showIcon
				/>
			)}

			<div style={{ textAlign: '-webkit-center' }}>
				<h2
					style={{
						//backgroundColor: `${colorMode.split('-')[2]}`,
						alignItems: 'center',
						height: '80px',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					Upload Json file - Example
				</h2>
			</div>

			<label className='custom-file-upload'>
				<input type='file' onChange={handleChange} accept='.json' />
				Upload JSON
			</label>

			<br />
			<br />

			{file && (
				<div>
					<GridStyled
						className='Styled'
						actionComplete={actionComplete}
						//ref={(grid) => grid && setDatas(grid?.dataSource)}
						id='adaptivebrowser'
						dataSource={file}
						height='100%'
						width='100%'
						allowFiltering={true}
						allowSorting={true}
						allowPaging={true}
						allowGrouping={true}
						allowReordering={true}
						allowResizing={true}
						//enablePersistence={true}
						showColumnChooser={true}
						filterSettings={filterOptions}
						toolbar={toolbarOptions}
						editSettings={editSettings}
						load={load}
						pageSettings={pageOptions}
						enableAdaptiveUI={width < 1200 && true}
						rowRenderingMode={width < 1200 && 'Vertical'}
					>
						<ColumnsDirective>
							<ColumnDirective
								field='OrderID'
								headerText='Order ID'
								isPrimaryKey={true}
							></ColumnDirective>
							<ColumnDirective
								field='CustomerID'
								headerText='Customer ID'
							></ColumnDirective>
							<ColumnDirective
								field='ShipName'
								headerText='ShipName'
							></ColumnDirective>
							<ColumnDirective
								field='ShipAddress'
								headerText='Ship Address'
							></ColumnDirective>
							<ColumnDirective
								field='ShipCity'
								headerText='Ship City'
							></ColumnDirective>
							<ColumnDirective
								field='ShipCountry'
								headerText='Ship Country'
							></ColumnDirective>
						</ColumnsDirective>
						<Inject
							services={[
								Filter,
								Sort,
								Edit,
								Toolbar,
								Page,
								Group,
								Reorder,
								Resize,
								ColumnChooser,
							]}
						/>
					</GridStyled>
					<br />
					<BtnWrapper>
						<BigBtn
							className='btn_json'
							style={{
								backgroundColor: colorMode && colorMode.split('-')[2],
							}}
							onClick={downloadFile}
						>
							Export data as json
						</BigBtn>{' '}
						<br />
						<BigBtn
							className='btn_server'
							onClick={(e) => console.log('Async/Await with Backend')}
							style={{
								backgroundColor: colorMode && colorMode.split('-')[2],
							}}
						>
							Sync with Server
						</BigBtn>
					</BtnWrapper>
				</div>
			)}
		</>
	);
};
