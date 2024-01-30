import { render, screen, fireEvent } from '../../../utils/test-utils';
import Modal from '../Modal';
const container = document.createElement('div');
container.id = 'modal-root';
document.body.appendChild(container);

describe('Modal component tests', () => {
	it('modal open', () => {
		render(
			<Modal isModal closeModal={() => {}} openModal={() => {}}>
				Modal content
			</Modal>,
		);

		expect(screen.getByTestId('close')).toBeInTheDocument();
		const modal = screen.getByTestId('modal');
		expect(modal).toBeInTheDocument;
		expect(modal.className).toContain('active');
	});

	it('modal close on close button', () => {
		render(
			<Modal isModal closeModal={() => {}} openModal={() => {}}>
				Modal content
			</Modal>,
		);
		const closeBtn = screen.getByTestId('close');
		const modal = screen.getByTestId('modal');
		fireEvent.click(closeBtn);
		expect(modal).toBeNull;
	});

	it('modal close on backdrop clickn', () => {
		render(
			<Modal isModal closeModal={() => {}} openModal={() => {}}>
				Modal content
			</Modal>,
		);
		const backdrop = screen.getByTestId('backdrop');
		const modal = screen.getByTestId('modal');
		fireEvent.click(backdrop);
		expect(modal).toBeNull;
	});
});
