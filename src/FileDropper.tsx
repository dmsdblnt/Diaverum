import {useDropzone} from "react-dropzone";
import styled from "styled-components";
import {CENTERED} from "./styles";

interface IFileDropperProps {
	setHeaders: (headers: string[]) => void;
	setTableRows: (tableRows: string[][]) => void;
}

export const FileDropper = ({setHeaders, setTableRows}: IFileDropperProps) => {
	const getDataFromDroppedFile = (files: File[]) => {
		try {
			const file = files[0];
			const reader = new FileReader();

			reader.onload = () => {
				let textRaw = reader.result as string;
				textRaw = textRaw.substring(textRaw.lastIndexOf("#") + 1).trim();
				const rows = textRaw?.split("\n");

				const headers = rows[0].split("|").map((header) => header.trim());
				const tableRows: string[][] = [];

				for (let i = 1; i < rows.length; i++) {
					tableRows[i] = rows[i].split("|").map((el) => el.trim());
				}

				setHeaders(headers);
				setTableRows(tableRows);
			};

			reader.readAsText(file);
		} catch {
			console.error("Something went wrong!");
		}
	};

	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop: getDataFromDroppedFile});

	return (
		<DropperStyled {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? <span>Drop the file here</span> : <span>Drag txt files here</span>}
		</DropperStyled>
	);
};

const DropperStyled = styled.div`
	width: 250px;
	height: 150px;
	border: 2px dashed gray;
	border-radius: 8px;
	${CENTERED};

	span {
		font-size: 14px;
		color: gray;
	}
`;
