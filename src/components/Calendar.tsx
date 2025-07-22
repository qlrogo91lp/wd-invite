import ScrollFadeIn from './common/ScrollFadeIn';

const WEEKS = [
	['', '1', '2', '3', '4', '5', '6'],
	['7', '8', '9', '10', '11', '12', '13'],
	['14', '15', '16', '17', '18', '19', '20'],
	['21', '22', '23', '24', '25', '26', '27'],
	['28', '29', '30', '', '', '', ''],
];

export default function Calendar() {
	return (
		<ScrollFadeIn>
			<div className='flex flex-col items-center w-full px-7'>
				<p className="font-nanumGothic mb-2 text-sm font-bold text-black mb-10">
					2025년 9월 13일 토요일 오후 12시 30분
				</p>
				<table className="table-fixed w-[90%]">
					<thead>
						<tr className="font-semibold text-sm">
							<th className="text-primary font-nanumGothic font-bold">일</th>
							<th className='font-nanumGothic font-bold'>월</th>
							<th className='font-nanumGothic font-bold'>화</th>
							<th className='font-nanumGothic font-bold'>수</th>
							<th className='font-nanumGothic font-bold'>목</th>
							<th className='font-nanumGothic font-bold'>금</th>
							<th className='font-nanumGothic font-bold'>토</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{WEEKS.map((week, rowIdx) => (
							<tr key={rowIdx}>
								{week.map((day, colIdx) => {
									const isTargetDay = day === '13';

									return (
										<td key={colIdx} className="text-center h-14 w-14">
											{isTargetDay ? (
												<div className='relative'>
													<div className="flex items-center justify-center w-10 h-10 mx-auto text-white bg-primary rounded-full">
														{day}
													</div>
													<div className="absolute text-[11px] text-primary top-11 whitespace-nowrap -left-3">
														<p>오후 12시 30분</p>
													</div>
												</div>
											) : (
												<span className={colIdx === 0 ? 'text-primary' : ''}>{day}</span>
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ScrollFadeIn>
	);
}