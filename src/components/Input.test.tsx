import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders input field', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
  });

  it('renders with label when provided', () => {
    render(<Input label="Username" />);
    expect(screen.getByText(/username/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('does not render label when not provided', () => {
    const { container } = render(<Input placeholder="No label" />);
    const labels = container.querySelectorAll('label');
    expect(labels).toHaveLength(0);
  });

  it('renders error message when provided', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
  });

  it('does not render error message when not provided', () => {
    const { container } = render(<Input />);
    const errorElements = container.querySelectorAll('.text-red-600');
    expect(errorElements).toHaveLength(0);
  });

  it('applies error styles when error is provided', () => {
    render(<Input error="Error" />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('border-red-500');
    expect(input.className).toContain('focus:ring-red-500');
  });

  it('applies normal styles when no error', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('border-gray-300');
    expect(input.className).toContain('focus:ring-blue-500');
  });

  it('handles user input', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Hello');

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello');
  });

  it('can be disabled', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('accepts custom className', () => {
    render(<Input className="custom-input" />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('custom-input');
  });

  it('forwards additional HTML input props', () => {
    render(<Input type="email" name="email" required />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toBeRequired();
  });

  it('renders with both label and error', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  it('renders as password input when type is password', () => {
    const { container } = render(<Input type="password" />);
    const input = container.querySelector('input[type="password"]');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });
});
