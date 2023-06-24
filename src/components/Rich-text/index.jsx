import { RichText as CMSRitchText } from '@graphcms/rich-text-react-renderer';

export const RichText = ({ ...props }) => {
  return (
    <CMSRitchText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-white font-semibold">{children}</b>
        ),
      }}
    />
  );
};
