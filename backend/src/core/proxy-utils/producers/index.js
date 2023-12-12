import Surge_Producer from './surge';
import SurgeMac_Producer from './surgemac';
import Clash_Producer from './clash';
import ClashMeta_Producer from './clashmeta';
import Stash_Producer from './stash';
import Loon_Producer from './loon';
import URI_Producer from './uri';
import V2Ray_Producer from './v2ray';
import QX_Producer from './qx';
import ShadowRocket_Producer from './shadowrocket';

function JSON_Producer() {
    const type = 'ALL';
    const produce = (proxies) => JSON.stringify(proxies, null, 2);
    return { type, produce };
}

export default {
    QX: QX_Producer(),
    Surge: Surge_Producer(),
    SurgeMac: SurgeMac_Producer(),
    Loon: Loon_Producer(),
    Clash: Clash_Producer(),
    ClashMeta: ClashMeta_Producer(),
    URI: URI_Producer(),
    V2Ray: V2Ray_Producer(),
    JSON: JSON_Producer(),
    Stash: Stash_Producer(),
    ShadowRocket: ShadowRocket_Producer(),
};
