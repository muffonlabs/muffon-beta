<template>
  <BaseTopPaginatedPageContainer
    :key="refreshKey"
    :scope="scope"
    :limit="limit"
    is-with-top-segment
    is-with-top-second-segment
    is-with-play-button
    is-with-country-select
    is-with-reload-button
  >
    <template
      #topPlayButton="topPlayButtonSlotProps"
    >
      <BaseTopTracksPlayButton
        limit-name="medium"
        :country="topPlayButtonSlotProps.country"
      />
    </template>

    <template
      #default="slotProps"
    >
      <BaseTracksSimpleList
        :tracks="slotProps[scope]"
        is-with-artist-name
        is-with-artist-image
        is-with-source-option
        is-with-library-option
        is-with-favorite-option
        is-with-bookmark-option
        is-with-listened-option
        is-with-playlist-option
        is-with-queue-option
        is-with-share-option
        is-with-external-link-option
      />
    </template>
  </BaseTopPaginatedPageContainer>
</template>

<script>
import BaseTopPaginatedPageContainer
  from '@/components/containers/pages/top/BaseTopPaginatedPageContainer.vue'
import BaseTracksSimpleList
  from '@/components/lists/tracks/BaseTracksSimpleList.vue'
import BaseTopTracksPlayButton
  from '@/components/buttons/play/top/BaseTopTracksPlayButton.vue'
import {
  tracks as tracksLimits
} from '@/helpers/data/limits'
import pageMixin from '@/mixins/pageMixin'

export default {
  name: 'TracksPage',
  components: {
    BaseTopPaginatedPageContainer,
    BaseTracksSimpleList,
    BaseTopTracksPlayButton
  },
  mixins: [
    pageMixin
  ],
  data () {
    return {
      limit:
        tracksLimits.simple.large,
      scope: 'tracks'
    }
  }
}
</script>

<style lang="sass" scoped></style>
