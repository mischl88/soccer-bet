import clsx from 'clsx';

interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Loader({ size = 'sm', className }: LoaderProps) {
  const classNameLoader = clsx(
    'inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]',
    {
      'h-5 w-5': size === 'xs',
      'h-6 w-6': size === 'sm',
      'h-8 w-8': size === 'md',
      'h-10 w-10': size === 'lg',
    },
    className,
  );

  return (
    <div className={clsx('flex justify-center', className)}>
      <div className={classNameLoader} role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
      </div>
    </div>
  );
}
