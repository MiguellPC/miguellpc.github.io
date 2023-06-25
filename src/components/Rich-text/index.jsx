import { RichText as CMSRitchText } from '@graphcms/rich-text-react-renderer';

export const RichText = ({ content, ...props }) => {
  return (
    <CMSRitchText
      {...props}
      content={content}
      renderers={{
        bold: ({ children }) => (
          <strong className="text-white font-semibold">
            {children}
          </strong>
        ),
      }}
    />
  );
};
