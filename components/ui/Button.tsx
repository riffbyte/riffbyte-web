import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-violet/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-blue-violet hover:bg-blue-violet/80 text-concrete',
                outline:
                    'border border-ebony/10 text-ebony/60 hover:border-medium-purple hover:text-ebony/80',
            },
            size: {
                default: 'text-sm px-4 py-2',
                lg: 'text-lg px-6 py-3',
                icon: 'text-sm h-10 w-10 p-2',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, type = 'button', ...props }, ref) => {
        return (
            <button
                className={clsx(buttonVariants({ variant, size, className }))}
                ref={ref}
                type={type}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof buttonVariants> {
    href: string;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, variant, size, href, ...props }, ref) => {
        return (
            <a
                className={clsx(buttonVariants({ variant, size, className }))}
                ref={ref}
                href={href}
                {...props}
            />
        );
    },
);
ButtonLink.displayName = 'Button.Link';
