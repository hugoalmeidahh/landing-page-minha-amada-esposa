import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-BR">
				<Head />
				<body className="leading-normal tracking-normal text-white gradient bg-background">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}