/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import {BLOCKS, MARKS} from '@contentful/rich-text-types';

const Text = ({children}) => (
  <>
    <p className="text-justify my-4">{children}</p>
  </>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <p className="font-bold">{text}</p>,
    [MARKS.ITALIC]: (text) => <p className="italic">{text}</p>,
    [MARKS.UNDERLINE]: (text) => <p className="underline">{text}</p>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: ({data: {target: {fields}}}) =>(
      <div className="self-center w-full border border-gray-300 rounded-lg">
        <img
          src={fields.file.url}
          height={fields.file.details.image.height}
          width={fields.file.details.image.width}
          className="rounded-lg"
        />
      </div>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="font-bold text-4xl">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h1 className="font-bold text-3xl">{children}</h1>,
    [BLOCKS.HEADING_3]: (node, children) => <h1 className="font-bold text-2xl">{children}</h1>,
    [BLOCKS.HEADING_4]: (node, children) => <h1 className="font-bold text-xl">{children}</h1>,
    [BLOCKS.HEADING_5]: (node, children) => <h1 className="font-bold text-lg">{children}</h1>,
    [BLOCKS.HEADING_6]: (node, children) => <h1 className="font-bold text-md">{children}</h1>,
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-outside list-disc ml-8">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-outside list-decimal ml-8">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  },
};

export default options;
