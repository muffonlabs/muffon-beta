<template>
  <BaseBookmarksTabContainer
    :scope="scope"
    :limit="limit"
    :is-active="isActive"
    is-with-top-section
    is-with-play-button
    @focus="handleFocus"
  >
    <template
      #topPlayButton
    >
      <BaseBookmarksTracksPlayButton />
    </template>

    <template
      #default="slotProps"
    >
      <BaseTracksSimpleList
        :tracks="slotProps[scope]"
        is-with-image
        is-with-artist-name
        is-with-album-title
        is-with-source
        is-with-created
        is-bookmark
        is-with-source-option
        is-with-library-option
        is-with-favorite-option
        is-with-listened-option
        is-with-playlist-option
        is-with-queue-option
        is-with-save-option
        is-with-share-option
        is-with-external-link-option
        is-with-delete-option
      />
    </template>
  </BaseBookmarksTabContainer>
</template>

<script>
import BaseBookmarksTabContainer
  from '@/components/containers/tabs/bookmarks/BaseBookmarksTabContainer.vue'
import BaseTracksSimpleList
  from '@/components/lists/tracks/BaseTracksSimpleList.vue'
import BaseBookmarksTracksPlayButton
  from '@/components/buttons/play/bookmarks/BaseBookmarksTracksPlayButton.vue'
import {
  tracks as tracksLimits
} from '@/helpers/data/limits'
import tabMixin from '@/mixins/tabMixin'

export default {
  name: 'TracksTab',
  components: {
    BaseBookmarksTabContainer,
    BaseTracksSimpleList,
    BaseBookmarksTracksPlayButton
  },
  mixins: [
    tabMixin
  ],
  data () {
    return {
      limit:
        tracksLimits.simple.small,
      scope: 'tracks'
    }
  }
}
</script>

<style lang="sass" scoped></style>
