import React from "react";
import { StyledBookmarks, BookmarksPlaceholder } from "./style";

import { observer } from 'mobx-react';
import { BookmarksItem } from "../BookmarksItem";

import dot from '../../store'
import { BookmarksTitle } from "../BookmarksItem/style";

export const Bookmarks = observer(() => {
    return (
        <StyledBookmarks>
            {dot.dbReady && dot.db.bookmarks.map(({ url, title, favicon, _id }) => (
                <>{url && <BookmarksItem key={_id} url={url} title={title} favicon={favicon || require("../../../../resources/icons/blank.svg").default} />}</>
            ))}

            {dot.dbReady && dot.db.bookmarks.filter(b => b.url).length == 0 && <BookmarksPlaceholder>For quick access, place your bookmarks and favourite pages in the bookmarks bar.</BookmarksPlaceholder>}
        </StyledBookmarks>
    )
})