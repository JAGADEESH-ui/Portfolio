export default function VideoComponent({ videoSrc }: any) {
	return (
		<div className="flex justify-center items-center h-[50vh] md:min-h-screen">
			<div className="w-full max-w-5xl md:px-4">
				<video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}
