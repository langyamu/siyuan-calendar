import { isDev } from '@/utils';
import { querySQL } from '.';

export { widget_dom_dateset, getWidgetBlockData };

const widget_dom_dateset:
    | {
          nodeId: string;
          type: string;
          subtype: string;
          nodeIndex?: string;
      }
    | DOMStringMap = isDev()
    ? JSON.parse(import.meta.env.VITE_WIDGET_DATASET)
    : window.frameElement?.parentElement?.parentElement?.dataset || {};

async function getWidgetBlockData() {
    return await querySQL(
        `SELECT * FROM blocks WHERE id = '${widget_dom_dateset.nodeId}'`,
    );
}
