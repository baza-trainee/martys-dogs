import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import  VideoDescription from '../VideoDescription'; 

const mockVideoDescriptionProps = {
  title: 'video.title.key',
  descriptionKeys: [
    { text: 'description.key1' },
    { text: 'description.key2' },
  ],
  descriptionStyle: 'customDescriptionStyle',
  pawImage: 'path/to/paw-image.png',
  pawImageStyle: 'customPawImageStyle',
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, 
  }),
}));

describe('VideoDescription Component', () => {
  it('renders VideoDescription component with given props', () => {
    render(<VideoDescription {...mockVideoDescriptionProps} />);

    const videoTitle = screen.getByText(/video.title.key/i);
    const descriptionText1 = screen.getByText(/description.key1/i);
    const descriptionText2 = screen.getByText(/description.key2/i);
    const pawImage = screen.getByAltText(/Paw Image/i);

    expect(videoTitle).toBeInTheDocument();
    expect(descriptionText1).toBeInTheDocument();
    expect(descriptionText2).toBeInTheDocument();
    expect(pawImage).toBeInTheDocument();

  });
});